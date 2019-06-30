import SecretCode from '../../models/SecretCode'

export default async (req, res) => {
  try {
    await SecretCode.findByIdAndUpdate(req.params.id, req.body)
    return res.status(200).end()
  } catch (err) {
    return res.status(500).json({err})
  }
}