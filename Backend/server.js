const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
    const { num1, num2, operator } = req.body;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                return res.status(400).json({ Error: "Indeterminado" });
            }
            result = n1 / n2;
            break;
        default:
            return res.status(400).json({ Error: "Operador inválido" });
    }

    res.json({ result });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});