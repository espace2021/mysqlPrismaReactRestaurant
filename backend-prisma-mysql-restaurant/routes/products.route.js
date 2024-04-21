const express = require('express');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const router = express.Router();

//Ajout d'un product
router.post('/', async (req, res, )=> { 
            
 const { 
  title   ,           
  image   ,          
  previewDescription ,
  detailDescription ,
  price           ,
  qtestock        ,
  codeCategorie      
} =req.body
    try {
        const product = await prisma.products.create({
            data: {
              title :  title,           
              image :  image,          
              previewDescription :previewDescription,
              detailDescription :detailDescription,
              price      : price    ,
              qtestock   : qtestock    ,
              codeCategorie :codeCategorie
            }
        })
    
        res.json(product)
      } catch (error) {
        res.status(500).json({
          message: "Something went wrong", error : error
        })
      }

});

// afficher la liste des products.

router.get('/', async (req, res, )=> {
    try {
        // products est le nom du model précisé dans prisma.schema
        const products = await prisma.products.findMany({
            include: {
                categorie: true,
                     },
          })
   
            res.json(products)
    
        } catch (error) {
         res.status(500).json({
        message: "Something went wrong", error : error
       })
       }
});

// afficher un product.
router.get('/:id', async (req, res, )=> {
    const { id } = req.params
    
    try {
        const product = await prisma.products.findUnique({
            where: {
                id: Number(id),
            }
        })
        
       res.json(product)
      } catch (error) {
        res.status(500).json({
          message: "Something went wrong", error : error
        })
      }

});



// modifier un product
router.put('/:id', async (req, res)=> {
  const { 
    title   ,           
    image   ,          
    previewDescription ,
    detailDescription ,
    price           ,
    qtestock        ,
    codeCategorie      
  } =req.body

    const id  = req.params.id;

    try {
     const product = await prisma.products.update({
          data: {
              title :  title,           
              image :  image,          
              previewDescription :previewDescription,
              detailDescription :detailDescription,
              price      : price    ,
              qtestock   : qtestock    ,
              codeCategorie :codeCategorie
            },
            where: { id: Number(id)},
        })
    res.json(product);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
});

// Supprimer un product
router.delete('/:id', async (req, res)=> {
    const  id  = req.params.id;
    try {
     await prisma.products.delete({
        where: { id: Number(id) },
    })

    res.json({ message: "product "+ id +" deleted successfully." });
} catch (error) {
    res.status(404).json({ message: error.message });
    }
});


module.exports = router;
