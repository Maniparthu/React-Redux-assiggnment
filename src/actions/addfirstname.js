const Addfirstname = function (firstname) {
    return (
        {
            type: "FIRSTNAME_ADD",
            payload: firstname
        }
    )
}

export default Addfirstname;