const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}


/* ***************************
 *  Build single vehicle detail view
 * ************************** */
invCont.buildByInvId = async function (req, res, next) {
  try {
    const inv_id = req.params.invId
    const data = await invModel.getVehicleById(inv_id)
    const vehicle = data[0]
    const vehicleName = `${vehicle.inv_make} ${vehicle.inv_model}`
    const detailsContent = await utilities.buildVehicleDetailContent(vehicle)
    let nav = await utilities.getNav()

    res.render("./inventory/vehicle-details", {
      title: vehicleName,
      nav,
      detailsContent,
    })
  } catch (error) {
    next(error)
  }
}


/* ***************************
 *  Intentional 500 Error (Task 3)
 * ************************** */
invCont.triggerError = (req, res, next) => {
  try {
    throw new Error("Intentional server error for testing purposes.")
  } catch (err) {
    next(err) // Pass error to middleware
  }
}

module.exports = invCont
