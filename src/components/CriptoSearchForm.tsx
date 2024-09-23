import { currencies } from "../data"

export const CriptoSearchForm = () => {

  return (
<form className="form" action="">
    <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select 
        name="currency" 
        id="currency">
            <option value="">Elegí una</option>
            {currencies.map((currency => (
            <option key={currency.code} value={currency.code}>
                {currency.name}
            </option>
        )))}
        </select>
    </div>
    <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select 
        name="criptocurrency" 
        id="criptocurrency">
            <option value="">Elegí uno</option>
        
        </select>
        <input type="submit" value="Cotizar" />
    </div>
</form>
)
}