import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [stats, setStats] = useState([]);

    // 백엔드 데이터 호출
    useEffect(() => {
        axios.get('/exDash')
            .then(response => {
                setStats(response.data); // 응답 데이터를 상태에 저장
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>

            {/* 첫 번째 리스트 */}
            <div style={{ marginBottom: '20px' }}>
                <h2>First Item</h2>
                {stats[0] ? (
                    <p>
                        {stats[0].sectiontype}: {stats[0].totalcount} (Average: {stats[0].totalavunit})
                    </p>
                ) : (
                    <p>No Data for First Item</p>
                )}
            </div>

            {/* 두 번째 리스트 */}
            <div>
                <h2>Second Item</h2>
                {stats[1] ? (
                    <p>
                        {stats[1].sectiontype}: {stats[1].totalcount} (Average: {stats[1].totalavunit})
                    </p>
                ) : (
                    <p>No Data for Second Item</p>
                )}
            </div>

            {/* 필요한 만큼 추가 */}
            <div>
                <h2>Third Item</h2>
                {stats[2] ? (
                    <p>
                        {stats[2].sectiontype}: {stats[2].totalcount} (Average: {stats[2].totalavunit})
                    </p>
                ) : (
                    <p>No Data for Third Item</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
