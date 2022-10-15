import Student from "../../models/student";

export const findAll = async (req, res) => {
  try {
    const students = await Student.find();

    res.json({
      ok:true,
      data:"Delete student"
    })
  } catch (error) {
    res.json({
      ok:false,
      data: error.message,
    })
  }
}

export const create = async (req, res) => {
  try {
    const { body } = req;
    const user = new Student(body);
    user.save();

    res.json({
      ok: true,
      data: user,
    })
  } catch (error) {
    res.json({
      ok:false,
      data:error.message,
    })
  }
}

export const update = async (req, res) => {
  try {
    const studentId =req.params.id;
    const studentUpdate = await Student.findByIdAndUpdate(
      studentId,req.body,
      {
        new: true,
      });

    res.json({
      ok: true,
      data: "Update student",
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const studentDelete = await Student.findByIdAndDelete(id)
    res.json({
      ok:true,
      data: "Delete student",
    })
  } catch (error) {
    res.json({
      ok:false,
      error: error.message,
    })
  }
}
