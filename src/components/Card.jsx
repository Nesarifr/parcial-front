import styles from './Card.module.css'


export function Card (props){
    
    const styleColor = {
        backgroundColor: `#${props.color}`
    }


    return (
    <>
        <div className={styles.card}>
            <div className={styles.nombre}>
                <h3>Hola {props.nombre}!!</h3>
            </div>
           
            <div>
                <p>Sabemos que tu color favorito es:</p>
                <span>#{props.color}</span>
                <div className={styles.color} style={styleColor} >
            </div>
            </div>
        </div>
    </>
    )

}