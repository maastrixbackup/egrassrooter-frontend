import dynamic from 'next/dynamic';
import 'chart.js/auto';

const BarChart = ({ resultsData }) => {
    const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
        ssr: false,
    });

    const labels = resultsData?.allpartyVotes?.map(item => item.state);
    const dataValues = resultsData?.allpartyVotes?.map(item => item.total_votes);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'YEAR WISE ELECTION DATA',
                data: dataValues,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <h1>Election Result</h1>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;
