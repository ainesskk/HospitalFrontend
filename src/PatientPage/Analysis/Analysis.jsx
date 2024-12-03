import PropTypes from "prop-types";

export default function Analysis({analysis}) {
    return (
        <>
            <p><b>Тип:</b> {analysis.type}</p>
            <p><b>Дата:</b> {analysis.date}</p>
            <p><b>Результат:</b> {analysis.result}</p>
        </>
    )
}

Analysis.propTypes = {
    analysis: PropTypes.shape({
        type: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired,
    })
}