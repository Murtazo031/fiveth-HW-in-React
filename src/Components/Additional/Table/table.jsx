import "./table.css";

export default function Table () {
    return <table className="table">
        <tr>
            <th>Блок</th>
            <th>Стоимость (₽)</th>
            <th>Расчетное время обучения (мес.) *</th>
        </tr>
        <tr style={{borderRadius:"20px"}}>
            <td>Введение в программирование
            </td>
            <td>Бесплатно</td>
            <td>0.5</td>
        </tr>
        <tr>
            <td>Основы программирования на Python
            </td>
            <td>9 900</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Python, продвинутый уровень
            </td>
            <td>14 900</td>
            <td>2.5</td>
        </tr>
        <tr>
            <td>Сети + фреймворк Flask</td>
            <td>14 900</td>
            <td>2.5</td>
        </tr>
        <tr>
            <td>Базы данных</td>
            <td>14 900</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Фреймворк Django
            </td>
            <td>14 900</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Разработка «боевого» проекта </td>
            <td>9 900</td>
            <td>1.5</td>
        </tr>
        <tr>
            <td>Итого</td>
            <td>79 400</td>
            <td>12</td>
        </tr>
    </table>
}