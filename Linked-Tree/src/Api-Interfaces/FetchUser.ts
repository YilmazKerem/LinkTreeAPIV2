function FetchUser()
{
    fetch('http://localhost:5275/api/User/1').then(
        (response) => response.json()
    ).then((json) =>
    {
        console.log(json);
        return json;
    }
    );
}

export default FetchUser();