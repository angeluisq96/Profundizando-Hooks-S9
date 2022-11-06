import { useCounter, useFetch } from '../hooks/index'
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1) ;

    console.log(counter)
  
    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/' + counter )

    // Aqui hago doble negacion que es un condicional, -- !!
    // compruebo que la data no tenga valor (Sea distinto a false) -- data &&
    // Ejecuto una sentoncia que toma el primer valor de la data -- data[0]
    // Ese procedimiento me permiten obtener las claver con la desestructuracion de data
    const { author, quote } = !!data && data[0]
  
    console.log({data, isLoading, hasError})
    return (
    <>
        <h1>Breacking Bad</h1>
        <hr />

        { isLoading ? <LoadingQuote /> : <Quote author={ author } quote={quote} /> }

        <button 
        className='btn btn-primary' 
        onClick={ () => increment() } 
        disabled={ isLoading }  >
            Next Quote
        </button>
    </>
  )
}
