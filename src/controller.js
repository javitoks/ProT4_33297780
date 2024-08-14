import {pool} from './database.js';

class LibroController{
    async getAll(req, res){
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async add(req, res){
        const libro = req.body;
        const [result] = await pool.query(`INSERT TO libros(nombre, autor, categoria, año-publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libros.nombre, libros.autor, libros.categoria, libros.año-publicacion, libros.ISBN]);
        res.json({"Libro agregado": result.insertId});
    }

}

export const libro = new LibroController();