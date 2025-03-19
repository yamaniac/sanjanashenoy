import mongoose from 'mongoose';

const referenceSchema = new mongoose.Schema({
  title: String,
  authors: String,
  journal: String,
  year: String,
  url: String
});

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this post'],
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug for this post'],
    unique: true
  },
  date: {
    type: Date,
    required: [true, 'Please provide a date for this post']
  },
  lastUpdated: {
    type: Date,
    default: null
  },
  category: {
    type: String,
    default: ''
  },
  excerpt: {
    type: String,
    required: [true, 'Please provide an excerpt for this post']
  },
  description: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: 'Sanjana Shenoy'
  },
  tags: {
    type: [String],
    default: []
  },
  thumbnail: {
    type: String,
    default: '/images/blog/default-blog-image.jpg'
  },
  image: {
    type: String,
    default: '/images/blog/default-blog-image.jpg'
  },
  image_alt: {
    type: String,
    default: ''
  },
  imageLicense: {
    type: String,
    default: ''
  },
  imageCredit: {
    type: String,
    default: ''
  },
  imageSource: {
    type: String,
    default: ''
  },
  video: {
    type: String,
    default: ''
  },
  references: {
    type: [referenceSchema],
    default: []
  },
  content: {
    type: String,
    required: [true, 'Please provide content for this post']
  },
  isMdFile: {
    type: Boolean,
    default: false
  },
  mdFilePath: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema); 