import { pool } from './database.js';

class LibroController {
    async getAll(req, res) {
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }
    async getOne(req, res) {
        const libro = req.body;
        const [result] = await pool.query(`SELECT * FROM libros WHERE Id=(?)`, [libro.id]);
        res.json(result);

    }

    async add(req, res) {
        try {
            const libro = req.body;
            const [result] = await pool.query(`INSERT INTO libros(nombre, autor, categoria, anio_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.ISBN]);
            res.json({ "Libro agregado": result.insertId });
        } catch (error) {
            console.error('Ocurrió un error:', error.message);
        }
    }
    async delete(req, res) {
        try {
            const libro = req.body;
            const [result] = await pool.query(`DELETE FROM libros WHERE ISBN=(?)`, [libro.ISBN]);
            res.json({ "Libro eliminado": result.affectedRows });
        } catch (error) {
            console.error('Ocurrió un error:', error.message);
        }

    }

    async update(req, res) {
        try {
            const libro = req.body;
            const [result] = await pool.query(`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), anio_publicacion=(?) WHERE ISBN=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.ISBN]);
            res.json({ "Libros actualizados": result.changedRows });
        } catch (error) {
            console.error('Ocurrió un error:', error.message);
        }
    }
}

export const libro = new LibroController();     