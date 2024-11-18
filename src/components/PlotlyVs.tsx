import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import axios from "axios";
import { groupingData } from '../api/endpoints.tsx'
import { GroupingData } from '../types/ApiResponses.tsx';

interface PlotlyVsProps {
    grouping_type: string;
}

const PlotlyVs: React.FC<PlotlyVsProps> = ({ grouping_type }) => {
    const [chartData, setChartData] = useState<GroupingData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchChartData = async () => {
        try {
            setLoading(true);
            const response = await axios.get<GroupingData[]>(`${groupingData}${grouping_type}`);
            const data = response.data;

            if (Array.isArray(data)) {
                setChartData(data);
            } else {
                console.error("Expected an array but got:", data);
            }
        } catch (error) {
            console.error("Error fetching chart data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchChartData();
    }, [grouping_type]);

    if (loading) {
        return <div>Loading chart data...</div>;
    }

    const title = `Quote Conversion Rate by ${grouping_type.charAt(0).toUpperCase() + grouping_type.slice(1)}`;

    return (
        <div>
            <h3>{title}</h3>
            <Plot
                data={[
                    {
                        x: chartData.map((item) => item.name),
                        y: chartData.map((item) => item.quoteConversion),
                        type: "bar",
                        marker: { color: "rgb(0, 123, 255)" },
                    },
                ]}
                layout={{
                    title: title,
                    xaxis: { title: "Status" },
                    yaxis: { title: "Quote Conversion %" },
                }}
            />
        </div>
    );
};

export default PlotlyVs;
