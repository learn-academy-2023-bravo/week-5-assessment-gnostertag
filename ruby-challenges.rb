# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# Expected output: ['coffee', 'soda water']
letter_t = 't'
letter_o = 'o'
Expected output: ['tea', 'water', 'soda water']
def single_letters array, letter
    #create method that takes in two parameters
    array.select do |value|
        #iterate through each value in the array
        if value.include?(letter)
            #if the value includes the letter it should be returned  
            value
        end
    end
end
p single_letters(beverages_array, letter_o)
p single_letters(beverages_array, letter_t)
##undefined method `Expected' for main:Object (NoMethodError)
#this is the error message I keep getting. I have no idea what I have to change to get this to work, I suspect it is something small that im not seeing but I have spent way too much time on this challenge.

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def hash_browns hash
    #create hash_browns method
    hash.values.flatten.sort
    # use the .flatten method to take care of nested arrays, use sort to place them in the correct order
end 
p hash_browns us_states

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    #created Bike class
    attr_accessor :model, :wheels, :current_speed
    
    def initialize model
     @model = model
     @wheels = 2
     @current_speed = 0
    end

    def bike_info 
        #string interpolation
     "The #{model} bike has #{wheels} wheels and is travelling at #{current_speed} miles per hour."
    end

    def pedal_faster mph
     @current_speed += mph
    end

    def slow_down mph
     @current_speed -= mph
     @current_speed = 0 if @current_speed <= 0
     #the speed cannot fall below 0 mph so i wrote this little if statement.
    end

end


trek = Bike.new('trek')
 trek.pedal_faster(10) #The trek bike has 2 wheels and is travelling at 10 miles per hour."
 trek.pedal_faster(18) #The trek bike has 2 wheels and is travelling at 28 miles per hour.
 trek.slow_down (5) #"The trek bike has 2 wheels and is travelling at 0 miles per hour."
 trek.slow_down (25) #"The trek bike has 2 wheels and is travelling at 0 miles per hour."

p trek.bike_info # "The trek bike has 2 wheels and is travelling at 10 miles per hour."


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
