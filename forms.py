from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms import SubmitField
from wtforms import IntegerField
from wtforms.validators import DataRequired, Length

class Register(FlaskForm):
    username = StringField('Username', validators=[
        DataRequired(), 
        Length(min=2, max=20)
    ]),
    email = StringField('Email', validators=[
        DataRequired(), 
        Length(min=2, max=20)
    ]),
    profile = StringField('Linkedin', validators=[
        DataRequired(), 
        Length(min=2, max=20)
    ]),
    age = IntegerField('Age', validators=[
        DataRequired(), 
        Length(min=2, max=20)
    ]),
    edu = StringField('Education', validators=[
        DataRequired(), 
        Length(min=2, max=20)
    ]),
    tr = IntegerField('Time Remaining', validators=[
        DataRequired(), 
        Length(min=2, max=20)
    ]),
    sskils = StringField('Soft Skills', validators=[
        DataRequired(), 
        Length(min=2, max=20)
    ]),
    hskills = StringField('Hard Skills', validators=[
        DataRequired(), 
        Length(min=2, max=20)
    ]),

    submit = SubmitField('SignUp')

