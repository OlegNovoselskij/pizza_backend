import Admin from '../models/adminModel.js';
// Отримання даних адміністратора
const getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findOne({}, { login: 1, password: 1, _id: 0 });
        if (!admin) {
            return res.status(404).json({ success: false, message: "Адміністратор не знайдений" });
        }
        res.json({ success: true, data: admin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Помилка сервера" });
    }
};


export { getAdmin };
