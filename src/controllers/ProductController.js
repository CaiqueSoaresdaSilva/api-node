const mongoose = require('mongoose');

const Product = mongoose.model('Product');

//MODULOS QUE SERÃO EXPORTADOS 
module.exports = {
    //LISTA TODOS OS PRODUTOS
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit:10 });

        return res.json(products);
    },

    //MOSTRA UM PRODUTO ESPECIFICO
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //ADICIONA UM NOVO PRODUTO
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    //ATUALIZA UM PRODUTO PELO ID
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    //DELETA UM PRODUTO PELO ID
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }

    
};