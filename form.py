from flask import Flask, render_template, redirect, url_for
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


app = Flask(__name__)

# Flask-WTF requires an encryption key - the string can be anything
app.config['SECRET_KEY'] = ']*x92Mgb-!wz;YhE|MsZxu%V2mGeE?'

# Flask-Bootstrap requires this line
Bootstrap(app)

class NameForm(FlaskForm):
    name = StringField('Any suggestions? Submit more medicines here.', validators=[DataRequired()])
    submit = SubmitField('Submit')
