# Tarea 4 - Almacenamiento y Consultas de Datos en Big Data

Curso Big Data (código 202016911) - UNAD. Grupo 202016911_90.
Autora: Sandra Patricia Mosquera Soto.

## Caso de uso
Inventario de una red de bodegas (Yumbo, Barranquilla, Putumayo y Bucaramanga) en MongoDB.

## Base de datos: `inventario_bodegas`
- `productos`: `codigo`, `nombre`, `categoria`, `bodega`, `cantidad`, `estado` (100 documentos)
- `movimientos`: `codigo`, `tipo` (Entrada/Salida), `cantidad`, `fecha` (100 documentos)

Las dos colecciones se relacionan por el campo `codigo`.

## Contenido
- `consultas_mongodb.js`: consultas ejecutadas en mongosh (inserción, selección, actualización, eliminación, `$lookup` y agregaciones por bodega y por categoría).

## Resultados principales
- 3.370 unidades en 100 productos (promedio 33,70 por producto).
- Mayor inventario por bodega: Bucaramanga (876 unidades). Por categoría: Mobiliario (918 unidades).

## Herramientas
MongoDB 9.0.4 y mongosh 2.14.1.
