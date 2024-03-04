const mongoose = require('mongoose');

const slugify = require('slugify');
const mongoosePaginate = require('mongoose-paginate-v2');

// Schema Config
const categorySchemaConfig = {
    timestamps: true,
};

// Schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    parentCategory: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category',
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
}, categorySchemaConfig);

// Methods
categorySchema.pre('validate', function(next) {
    if (!this.slug) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

// Plugin
categorySchema.plugin(mongoosePaginate);

// Model
const Category = mongoose.model('Category', categorySchema);
