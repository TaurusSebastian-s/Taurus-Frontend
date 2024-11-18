import React from 'react';
import ReactGridAG from "../components/ReactGridAG.tsx";
import PlotlyVs from "../components/PlotlyVs.tsx";

const App: React.FC = () => {
    return (
        <div className="App h-screen flex flex-col">
            {/* Banner */}
            <header className="bg-blue-600 text-white py-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-3xl font-bold">Datos de FastAPI</h1>
                    <p className="text-lg">Análisis y visualización de datos</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto p-6">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-xl font-semibold mb-4">Tablas Agregadas</h2>
                    <ReactGridAG grouping_type="tenant" />
                    <ReactGridAG grouping_type="agent" />
                    <ReactGridAG grouping_type="state" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <PlotlyVs grouping_type="tenant"/>
                    <PlotlyVs grouping_type="agent"/>
                    <PlotlyVs grouping_type="state"/>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 mt-6">
                <div className="container mx-auto text-center">
                <p>&copy; 2024 @ SebastianLopezO</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
