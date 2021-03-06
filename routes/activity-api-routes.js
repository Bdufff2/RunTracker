// Requiring our models
var db = require("../models");

module.exports = function (app) {

    // Add a new activity
    // Postman Format:
    // {
    //     "UserId": 1,
    //     "distance": 6.4,
    //     "totalActivityTime": 80,
    //     "averagePace": 10,
    //     "averageSpeed": 5
    // }
    app.post("/api/activity", function (req, res) {
        db.Activity.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            console.log(err);
        });
    });
    // Get all activities by user id
    app.get("/api/activity/:UserID", function (req, res) {
        db.Activity.findAll({
            where: {
                UserID: req.params.UserID
            },
            order: [["date", "DESC"]],
        }).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            console.log(err);
        });
    });
    // Get a single activity
    app.get("/api/activity/:id", function (req, res) {
        db.Activity.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            console.log(data);
            res.json(data)
        }).catch(function (err) {
            console.log(err);
        });
    });
    // Update an existing activity
    app.put("/api/activity/:id", function (req, res) {
        db.Activity.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(function (data) {
                res.json(data);
            }).catch(function (err) {
                console.log(err);
            });
    });
    // Delete an activity
    app.delete("/api/activity/:id", function (req, res) {
        db.Activity.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            console.log(err);
        });
    });
};