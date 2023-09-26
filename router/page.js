import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.render("index", {title: 'Anbaras || Mebel'})
})
router.get("/about", (req, res) => {
	res.render("about", {title: 'Anbaras || Mebel'})
})
router.get("/category", (req, res) => {
	res.render("category", {title: 'Anbaras || Mebel'})
})
router.get("/gallery", (req, res) => {
	res.render("gallery", {title: 'Anbaras || Mebel'})
})
router.get("/order", (req, res) => {
	res.render("contact", {title: 'Anbaras || Mebel'})
})

export default router;