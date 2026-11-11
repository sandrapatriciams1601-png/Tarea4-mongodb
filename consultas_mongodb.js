// Tarea 4 - Almacenamiento y Consultas de Datos en Big Data
// Caso de uso: inventario de una red de bodegas (Yumbo, Barranquilla, Putumayo y Bucaramanga)
// Ejecucion en mongosh:  load("consultas_mongodb.js")  

// 1. Base de datos y colecciones
use inventario_bodegas
db.createCollection("productos")
db.createCollection("movimientos")
show collections

// 2. Carga de datos (100 productos + 100 movimientos) con insertMany
// db.productos.insertMany(listaProductos)
// db.movimientos.insertMany(listaMovimientos)
db.productos.countDocuments()     // 100
db.movimientos.countDocuments()   // 100

// 3. Consultas basicas
// 3.1 Insercion
db.productos.insertOne({codigo:"TEMP001", nombre:"Producto de prueba", categoria:"Prueba", bodega:"Yumbo", cantidad:1, estado:"Temporal"})

// 3.2 Seleccion
db.productos.find({bodega:"Yumbo"})
db.productos.findOne({codigo:"P001"})

// 3.3 Actualizacion
db.productos.updateOne(
  {codigo:"P001"},
  {$set:{cantidad:35}}
)

// 3.4 Eliminacion
db.productos.deleteOne({codigo:"TEMP001"})
db.productos.countDocuments()     // 100

// 4. Relacion entre colecciones ($lookup): producto P001 con su historial de movimientos
db.productos.aggregate([
  {$match:{codigo:"P001"}},
  {$lookup:{
    from:"movimientos",
    localField:"codigo",
    foreignField:"codigo",
    as:"historial_movimientos"
  }}
])

// 5. Agregaciones: contar, sumar y promediar
// 5.1 Por bodega
db.productos.aggregate([
  {$group:{
    _id:"$bodega",
    totalProductos:{$sum:1},
    totalUnidades:{$sum:"$cantidad"},
    promedioUnidades:{$avg:"$cantidad"}
  }},
  {$sort:{_id:1}}
])

// 5.2 Por categoria
db.productos.aggregate([
  {$group:{
    _id:"$categoria",
    totalProductos:{$sum:1},
    totalUnidades:{$sum:"$cantidad"},
    promedioUnidades:{$avg:"$cantidad"}
  }},
  {$sort:{_id:1}}
])
