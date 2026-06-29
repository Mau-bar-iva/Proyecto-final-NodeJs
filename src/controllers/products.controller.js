import * as productsService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await productsService.getAllProducts();
        res.status(200).json(products);
    } catch (e) {
        res.status(500).json({
            e: 'Error al obtener los productos'
        })
    }

}
export const getProductById = async (req, res) => {
    try {
        const id = String(req.params.id);

        if (!id) {
            return res.status(400).json({
                error: 'ID inválido'
            });
        }

        const product = await productsService.getProductById(id);

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (e) {
        res.status(500).json({
            e: 'Error al obtener el producto'
        })
    }
}

export const createProduct = async (req, res) => {
    try {
        const newProduct = await productsService.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (e) {
        res.status(500).json({
            e: 'Error al crear el producto'
        })
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({
                error: 'ID inválido'
            })
        }

        const result = await productsService.deleteProduct(id);

        if (!result) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        res.status(200).json({
            message: 'Producto eliminado correctamente'
        });

    } catch (error) {
        res.status(500).json({
            error: 'Error al eliminar el producto'
        });
    }
};