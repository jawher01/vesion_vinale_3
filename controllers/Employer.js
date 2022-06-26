const employer = require("../models/Employer");



//ajouter un employer
exports.PostEmployer = async (req,res) => {
      try {
            const newEmployer = new employer({ 
                  nom:req.body.nom,
                  prenom:req.body.prenom,
                  poste:req.body.poste,
                  salaire:req.body.salaire,
                  rib:req.body.rib,
             });
            const response = await newEmployer.save();
            res.status(200).json({ response: response, message: "employer enregistrer" });
      } catch (error) {
            res.status(400).json({ message: "ne peut pas le sauvegarder" }, error);
      }
};

//GET all employers
exports.GetAllEmployer = async (req, res) => {
      try {
            const result = await employer.find().sort({createdAt:-1})
            res.send({ response: result, message: "avoir employer avec succès" });
      } catch (error) {
            res.status(400).send({ message: "ne peut pas obtenir employer" });
            console.log(error)
      }
};

//GET one employer
exports.GetOneEmployer = async (req, res) => {
      try {
            const result = await employer.findOne({ _id: req.params.id })
            res.send({ response: result, message: "avoir employer avec succès" });
      } catch (error) {
            res.status(400).send({ message: "il n'y a pas de employer avec cet identifiant" });
      }
};

//delete one employer by id
exports.DeleteOneEmployer = async (req, res) => {

      try {
            const result = await employer.deleteOne({ _id: req.params.id })
            result
                  ? res.send({ message: "employer supprimé" })
                  : res.send({ message: "il n'y a pas de employer avec cet identifiant" });

      } catch (error) {
            res.status(400).send({ message: "il n'y a pas de employer avec cet identifiant" });
      }
};

//update a employer by id
exports.UpdateEmployer = async (req, res) => {
      try {
            const result = await employer.updateOne(
                  { _id: req.params.id },
                  { $set: { ...req.body } })
            result.nModified ?
                  res.send({ message: "employer mis à jour"}) :
                  res.send({ message: "employer déjà mis à jour" })
      } catch (error) {
            res.status(400).send({ message: "il n'y a pas de employer avec cet identifiant" });
      }
};