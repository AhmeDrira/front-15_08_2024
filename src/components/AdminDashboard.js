import React from 'react';

const AdminDashboard = () => {
    return (
        <div style={dashboardStyle}>
            <h1 style={titleStyle}>Tableau de bord d'admin</h1>
            <div style={contentStyle}>
                {/* Contenu du tableau de bord d'administration */}
            </div>
        </div>
    );
}

const dashboardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
}

const titleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
}

const contentStyle = {
    // Ajoutez ici les styles pour le contenu du tableau de bord
}

export default AdminDashboard;
