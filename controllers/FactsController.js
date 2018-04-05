const mongoose = require('mongoose')
const Facts = mongoose.model('Facts')

// exports.getFacts = async (req, res) => {
//   const facts = await Facts
//     .find()
//     .limit(50)

//   res.json(facts);
// };

exports.getFacts = async (req, res) => {
  const page = req.query.page || 1;
  const limit = 4;
  const skip = (page * limit) - limit;

  const factsPromise = await Facts
    .find()
    .skip(skip)
    .limit(limit)
    .sort({ artist: 'asc' })
  
  const countPromise = Facts.count()

  const [facts, count] = await Promise.all([factsPromise, countPromise])
  const pages = Math.ceil(count / limit)

  res.json(facts);
};

exports.getFactById = async (req, res) => {
  const fact = await Facts.findOne({ _id: req.params.id })
  if (!fact) {
    throw Error('No fact with the given ID!')
  }
  res.json(fact)
}

exports.factsForm = (req, res) => {
  res.render('factsForm', {
    title: 'Add an Album',
    fact: {}
  })
}

exports.submitFact = async (req, res) => {
  console.log(req.body)
  const fact = await (new Facts(req.body)).save()
  res.redirect('/facts/add')
  return
}

exports.editFact = async (req, res) => {
  const fact = await Facts.findOne({ _id: req.params.id })
  res.render(
    'factsForm', {
      title: `Edit ${fact.title}`,
      fact
    }
  )
}

exports.updateFact = async (req, res) => {
  const body = req.body
  body.updated_at = new Date()

  const fact = await Facts.findOneAndUpdate(
    { _id: req.params.id },
    body,
    { new: true}
  ).exec()
  res.redirect('/facts')
}

exports.deleteFact = async (req, res) => {
  const fact = await Facts.findOne({ _id: req.params.id })
  await fact.remove()
  return res.redirect('/facts')
}