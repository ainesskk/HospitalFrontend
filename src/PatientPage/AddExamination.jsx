import Arrow from "../Arrow.jsx";

export default function AddExamination () {
    return (
        <>
            <div className="add-history-container">
                <Arrow/>
                <form className="add-history-form">
                    <input type="date" name="date" placeholder="Дата осмотра" required onChange={handleChange}/>
                    <textarea name="conclusion" placeholder="Заключение" required onChange={handleChange}/>

                </form>
                <pre className="notification">{notification}</pre>
            </div>
        </>
    )
}