/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Book store application' });
    };
    module.exports = {
        index
        };