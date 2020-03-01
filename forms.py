from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms import SubmitField
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
    submit = SubmitField('SignUp')

