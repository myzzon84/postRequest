import { useQuery } from '@tanstack/react-query';
import './App.scss';

const App = () => {

    const postRequest = async () => {
        let response = await fetch('https://accountingpoc.azurewebsites.net/api/Invoice/createinvoice', { method: 'POST', body: JSON.stringify(example)
        });

        let result = await response.json();
        console.log(result);
        return result;
    }



    const { isLoading, data, error } = useQuery(["postRequest"], postRequest);

    const example = {
        id: 0,
        companyId: 0,
        invoiceNumber: "string",
        orderNumber: "string",
        status: "string",
        invoicedAt: "2023-03-21T19:52:02.208Z",
        dueAt: "2023-03-21T19:52:02.208Z",
        amount: 0,
        currencyCode: "string",
        currencyRate: 0,
        categoryId: 0,
        contactId: 0,
        contactName: "string",
        contactEmail: "string",
        contactTaxNumber: "string",
        contactPhone: "string",
        contactAddress: "string",
        notes: "string",
        footer: "string",
        parentId: 0,
        createdAt: "2023-03-21T19:52:02.208Z",
        updatedAt: "2023-03-21T19:52:02.208Z",
        deletedAt: "2023-03-21T19:52:02.208Z"
    }

    return (
        <div className="appWrapper">

        </div>
    );
}

export default App;