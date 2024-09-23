export const SearchCrypto = () => {
  return (
    <form
    className="form">
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select name="currency" id="currency">
                <option value="">Elige una</option>
            </select>
        </div>
        <div className="field">
            <label htmlFor="cryptocurrency">Criptomoneda:</label>
            <select name="cryptocurrency" id="cryptocurrency">
                <option value="">Elige una</option>
            </select>
        </div>
        <input type="submit" value="Cotizar" />
    </form>
  )
}