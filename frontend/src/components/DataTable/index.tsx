function DataTable() {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2022</td>
                        <td>Barry Gordon</td>
                        <td>30</td>
                        <td>21</td>
                        <td>25197.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2019</td>
                        <td>Lisa Gordon</td>
                        <td>24</td>
                        <td>20</td>
                        <td>72196.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;