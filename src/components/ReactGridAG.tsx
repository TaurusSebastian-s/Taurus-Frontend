import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from 'ag-grid-community';

import axios from "axios";
import { groupingData } from '../api/endpoints.tsx';
import { GroupingData } from '../types/ApiResponses.tsx';


interface ReactGridAGProps {
    grouping_type: string;
}

const ReactGridAG: React.FC<ReactGridAGProps> = ({ grouping_type }) => {
    const [data, setData] = useState<GroupingData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get<GroupingData[]>(`${groupingData}${grouping_type}`);

            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [grouping_type]);

    const columns: ColDef<GroupingData>[] = [
        { headerName: "Name", field: "name" },
        { headerName: "# Quotes", field: "quotes" },
        { headerName: "# Quote NB", field: "quoteNB" },
        { headerName: "Quote Conversion %", field: "quoteConversion" },
        { headerName: "Quote NB Premium", field: "quoteNBPremium" },
        { headerName: "Average NB Premium", field: "averageNBPremium" },
        { headerName: "# PIF", field: "pif" },
        { headerName: "Expired Policies", field: "expiredPolicies" },
        { headerName: "Expired Premium", field: "expiredPremium" },
        { headerName: "Retention %", field: "retention" },
    ];

    if (loading) {
        return <div>Loading data...</div>;
    }

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: "100%", marginBottom: "20px" }}>
            <h3 className="text-xl font-semibold mb-4"> • {grouping_type.charAt(0).toUpperCase() + grouping_type.slice(1)} Data</h3>
            <AgGridReact
                columnDefs={columns}
                rowData={data}
                domLayout="autoHeight"
                pagination={true}
                paginationPageSize={10}
            />
        </div>
    );
};

export default ReactGridAG;
