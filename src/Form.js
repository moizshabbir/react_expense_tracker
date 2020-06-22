function Form() {
    const [transaction, setTransaction] = useState();
    const saveForm = (e) => {

    }
    return (
        <form>
            <h2>
                Add Transaction
            </h2>
            <div class="form-row">
            <label>Description:</label>
            <input type="text" name="description" value="{transaction.desc}" onChange={(e) => {setTransaction(transaction)}} />
            </div>
            <div className="form-row">
                <label>Amount:</label>
                <input type="number" name="amount" value="{transaction.amount}" onChange={(e) => {setTransaction(transaction)}} />
            </div>
            <button type="button" onClick="saveForm">Add Transaction</button>
        </form>
    );
}

export default Form;