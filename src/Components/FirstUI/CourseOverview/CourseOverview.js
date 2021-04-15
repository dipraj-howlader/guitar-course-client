import React from 'react';

const CourseOverview = () => {
    return (
        <div style={{justifyContent:'center',alignItems:'center',textAlign:'center'}} className="backgroundClr color pt-5">
            <h1 className="pb-5">Course Overview & Example</h1>
            <iframe width="700" height="400" src="https://www.youtube.com/embed/6drQL2NpjlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default CourseOverview;