const express = require('express');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const router = express.Router();

//Ajout d'une categorie
router.post('/', async (req, res, )=> { 
    const {desCat,imageCat}=req.body
    try {
        const categorie = await prisma.categorie.create({
            data: {
                desCat: desCat,
                imageCat: imageCat
            }
        })
    
        res.json(categorie)
      } catch (error) {
        res.status(500).json({ error : error,
          message: "Something went wrong",
        })
      }

});

// afficher la liste des catégories.
router.get('/', async (req, res, )=> {
    try {
        // categorie est le nom du model précisé dans prisma.schema
        const categories = await prisma.categorie.findMany()
         res.json(categories)
        } catch (error) {
         res.status(500).json({ 
            message: error.message
       })
       }
});

// afficher une categorie.
router.get('/:id', async (req, res, )=> {
    const { id } = req.params
    
    try {
        const categorie = await prisma.categorie.findUnique({
            where: {
                id: Number(id),
            }
        })
        
       res.json(categorie)
      } catch (error) {
        res.status(500).json({
            message: error.message
        })
      }

});



// modifier une categorie
router.put('/:id', async (req, res)=> {
    const {desCat,imageCat}=req.body
    const id  = req.params.id;

    try {
     const categorie = await prisma.categorie.update({
        data: {
            desCat: desCat,
            imageCat: imageCat
        },
            where: { id: Number(id)},
        })
    res.json(categorie);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
});

// Supprimer un categorie
router.delete('/:id', async (req, res)=> {
    const  id  = req.params.id;
    try {
     await prisma.categorie.delete({
        where: { id: Number(id) },
    })

    res.json({ message: "category "+ id +" deleted successfully." });
} catch (error) {
    res.status(404).json({ message: error.message });
    }
});

module.exports = router;
