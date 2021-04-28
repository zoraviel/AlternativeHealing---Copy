from flask import Flask, render_template, redirect, url_for, request, flash
from modules import convert_to_dict
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired

from flask_sqlalchemy import SQLAlchemy

from wtforms import SubmitField, SelectField, RadioField, HiddenField, StringField, IntegerField, FloatField
from wtforms.validators import InputRequired, Length, Regexp, NumberRange
from sqlalchemy.exc import OperationalError
from sqlalchemy.sql import text


app = Flask(__name__)
application = app
app.config['SECRET_KEY'] = 
import csv

Bootstrap(app)


db_name = 'qtpocpun_alternativemedicine.db'

app.config['SQLALCHEMY_DATABASE_URI'] =

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

# this variable, db, will be used for all SQLAlchemy commands
db = SQLAlchemy(app)


# create a list of dicts from a CSV
alternative_list = convert_to_dict("alternative.csv")
herbs_list = convert_to_dict("herbs.csv")
gem_list = convert_to_dict("gem.csv")

pairs_list = []

for a in alternative_list:
    pairs_list.append( ( a['Number'], a['Name']) )

pairs1_list = []

for h in herbs_list:
    pairs1_list.append( ( h['Number'], h['Name']) )

pairs2_list = []

for g in gem_list:
    pairs2_list.append( ( g['Number'], g['Name']) )


db_name = 'qtpocpun_alternativemedicine.db'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_name

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

class alternativemedicine(db.Model):
    __tablename__ = 'info'
    id = db.Column(db.Integer, primary_key=True)
    submit = db.Column(db.String)

    def __init__(self,submit):
        db.create_all()
        self.submit = submit



class AddRecord(FlaskForm):
    # id used only by update/edit
    submit = StringField('You see something missing? Suggest a new healing method!', [ InputRequired(),
        Regexp(r'^[A-Za-z\s\-\']+$', message="Invalid medicine name"),
        Length(min=1, max=300, message="Invalid medicine length")
        ])

    submition = SubmitField('Add a New Method!')



#first is the worst
@app.route('/', methods=['GET', 'POST'])
def index():
    # you must tell the variable 'form' what you named the class, above
    # 'form' is the variable name used in this template: index.htm
    form = AddRecord()
    if form.validate_on_submit():
        submit = request.form['submit']
            # the data to be inserted into Sock model - the table, socks
        record = alternativemedicine(submit)
            # Flask-SQLAlchemy magic adds record to database
        db.session.add(record)
        db.session.commit()
            # create a message to send to the template
        message = f"The data for sock {submit} has been submitted."
        return render_template('index.html', message=message, form=form)
    else:
        # show validaton errors
        # see https://pythonprogramming.net/flash-flask-tutorial/
        for field, errors in form.errors.items():
            for error in errors:
                flash("Error in {}: {}".format(
                    getattr(form, field).label.text,
                    error
                ), 'error')
        return render_template('index.html', form=form)

    return render_template('index.html', pairs=pairs_list, the_title="Medicine Index", form=form)


#second is the best!
@app.route('/gem', methods=['GET'] )

def gem():
    try:
        g_dict = gem_list
    except:
        return f"<h1>Invalid value for a medicine.</h1>"
    #you do need this! but you could possibly remove ord
    return render_template('gem.html', gem=g_dict, pairss=pairs1_list)

@app.route('/alternative', methods=['GET'] )

def alternative():
    try:
        a_dict = alternative_list
    except:
        return f"<h1>Invalid value for a medicine</h1>"
    #you do need this! but you could possibly remove ord
    return render_template('alternative.html', alt=a_dict, pairsss=pairs2_list)

@app.route('/herbs', methods=['GET'] )

def herbs():
    try:
        h_dict = herbs_list

    except:
        return f"<h1>Invalid value for a medicine.</h1>"
    #you do need this! but you could possibly remove ord
    return render_template('herbs.html', herbs=h_dict)




if __name__ == '__main__':
    app.run(debug=True)
    init_db()
