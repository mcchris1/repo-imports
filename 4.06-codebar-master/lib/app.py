class Member:
    def __init__(self, name):
        self.name = name
    
    def plea(self):
        return f"Hi! I'm {self.name}! Love me!"

class Student(Member):
    def __init__(self, name, raison):
        super().__init__(name)
        self.raison = raison

class Instructor(Member):
    def __init__(self, name, qual, skills):
        super().__init__(name) 
        self.qual = qual 
        self.skills = skills
    
    def add_skill(self, skill):
        self.skills.append(skill)

class Workshop():
    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        self.instructors = []
        self.students = []
    
    def add_communicant(self, member):
        if isinstance(member, Instructor):
            self.instructors.append(member)
        elif isinstance(member, Student):
            self.students.append(member)

    def print_details(self):
        print(f'Workshop details:\nDate: {self.date}\nSubject: {self.subject}')
        if self.instructors:
            print('Instructors:')
            for instructor in self.instructors:
                print(instructor.name)
                print(instructor.qual)
        if self.students:
            print('Students:')
            for student in self.students:
                print(student.name)
                print(student.raison)

workshop = Workshop("12/03/2014", "Shutl")

jane = Student("MeJane", "I need a place to hide out from that chest-beating mouthbreather.")
lena = Student("Neal", "I too need a place to hide. Just until things quiet down.")
vicky = Instructor("Victoria", "I was told there would be punch and pie.", ['MS-DOS'])
vicky.add_skill("Collecting empty cans.")
vicky.add_skill("Nevermind, I've misunderstood the prompt.")
nicole = Instructor("Nicole Realname", "I have been programming for 5 years in Python and want to spread the love.", ['Also I am a registered sexual offender.'])
nicole.add_skill("Parsing.")

workshop.add_communicant(jane)
workshop.add_communicant(lena)
workshop.add_communicant(vicky)
workshop.add_communicant(nicole)
workshop.print_details()