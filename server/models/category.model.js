import mongoose from 'mongoose'

const categoryShema = new mongoose.Schema({
	title: { type: String, required: true }
})

export default mongoose.model('Category', categoryShema)
