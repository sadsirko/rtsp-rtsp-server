import React from 'react';
import { useParams } from 'react-router-dom';

function EditCamera() {
    const { id } = useParams();

    return (
        <div>
            <h2>Edit Camera {id}</h2>
            {/* Form for editing a camera */}
        </div>
    );
}

export default EditCamera;
