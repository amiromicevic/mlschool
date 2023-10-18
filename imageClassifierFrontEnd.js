
async function classifyImage(dataURL) {

    var base64ImageEncoded = dataURL.replace('data:', '').replace(/^.+,/, '');
    
    var data = {
        'input': base64ImageEncoded 
    };

    const response = await fetch(
        "AMAZON API GATEWAY END POINT GOES HERE",
        {
            method: "POST",
            body: JSON.stringify(data)
        });

    const labels = ['unclassified', 'up', 'down'];
    const json = await response.json();
    let prediction = null;

    if (json.body) {
        let maxIndex = parseInt(json.body.maxIndex);
        prediction = labels[maxIndex];       
    }

    return prediction;
}


