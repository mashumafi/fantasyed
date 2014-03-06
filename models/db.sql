DROP DATABASE IF EXISTS fantasyed;
CREATE DATABASE fantasyed;
USE fantasyed;
SET FOREIGN_KEY_CHECKS = 0;

/*Tables*/

CREATE TABLE roles (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(16) NOT NULL
);

CREATE TABLE schools (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL
);

CREATE TABLE accounts (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(16) NOT NULL,
    last_name VARCHAR(16) NOT NULL,
    role_id INT NOT NULL,
    school_id INT NOT NULL,
    CONSTRAINT account_role FOREIGN KEY (role_id) REFERENCES roles(id),
    CONSTRAINT account_school FOREIGN KEY (school_id) REFERENCES schools(id)
);

CREATE TABLE behaviors (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    description VARCHAR(128) NOT NULL,
    season_id INT NOT NULL,
    category_id INT NOT NULL,
    CONSTRAINT behavior_season FOREIGN KEY (season_id) REFERENCES seasons(id),
    CONSTRAINT behavior_category FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE categories (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL
);

CREATE TABLE category_cache (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	currentWeekScore int,
	previousWeekScore int,
	totalScore int,
    account_id INT NOT NULL,
    season_id INT NOT NULL,
    category_id INT NOT NULL,
    CONSTRAINT category_cache_account FOREIGN KEY (account_id) REFERENCES accounts(id),
    CONSTRAINT category_cache_season FOREIGN KEY (season_id) REFERENCES seasons(id),
    CONSTRAINT category_cache_category FOREIGN KEY (category) REFERENCES categories(id)
);

CREATE TABLE frequencies (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    days INT NOT NULL,
    points INT NOT NULL,
    behavior_id INT NOT NULL,
    CONSTRAINT frequency_behavior FOREIGN KEY (behavior_id) REFERENCES behaviors(id)
);

CREATE TABLE rewards (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    description VARCHAR(128) NOT NULL,
    bonus INT, -- null is badge
    is_secret TINYINT NOT NULL,
    season_id INT NOT NULL,
    CONSTRAINT reward_season FOREIGN KEY (season_id) REFERENCES seasons(id)
);

CREATE TABLE requirements (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    
    points INT NOT NULL, -- required points
    days INT NOT NULL, -- number of days to get points
    
    is_all_classes TINYINT NOT NULL, -- must be done in every class
    is_team TINYINT NOT NULL, -- checks if each member of team done it
    use_max TINYINT NOT NULL, -- does not add points, instead just take max value
    
    behavior_id INT NOT NULL,
    reward_id INT NOT NULL,
    CONSTRAINT requirement_behavior FOREIGN KEY (behavior_id) REFERENCES behaviors(id),
    CONSTRAINT requirement_reward FOREIGN KEY (reward_id) REFERENCES rewards(id)
);

CREATE TABLE activities (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(16) NOT NULL,
    is_class TINYINT NOT NULL,
    season_id INT NOT NULL,
    CONSTRAINT activity_season FOREIGN KEY (season_id) REFERENCES seasons(id)
);

CREATE TABLE seasons (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    start DATE NOT NULL,
    stop DATE NOT NULL,
    school_id INT NOT NULL,
    CONSTRAINT season_school FOREIGN KEY (school_id) REFERENCES schools(id)
);

CREATE TABLE teams (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(16) NOT NULL,
    season_id INT NOT NULL,
    CONSTRAINT team_season FOREIGN KEY (season_id) REFERENCES seasons(id)
);

CREATE TABLE membership (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    team_id INT NOT NULL,
    account_id INT NOT NULL,
    CONSTRAINT membership_team FOREIGN KEY (team_id) REFERENCES teams(id),
    CONSTRAINT membership_account FOREIGN KEY (account_id) REFERENCES accounts(id)
);

CREATE TABLE reports (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    account_id INT NOT NULL,
    season_id INT NOT NULL,
    CONSTRAINT report_account FOREIGN KEY (account_id) REFERENCES accounts(id),
    CONSTRAINT report_season FOREIGN KEY (season_id) REFERENCES seasons(id)
);

CREATE TABLE roster (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    activity_id INT NOT NULL,
    report_id INT NOT NULL,
    CONSTRAINT roster_activity FOREIGN KEY (activity_id) REFERENCES activities(id),
    CONSTRAINT roster_report FOREIGN KEY (report_id) REFERENCES reports(id)
);

CREATE TABLE behavior_recognitions (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    roster_id INT NOT NULL,
    behavior_id INT NOT NULL,
    CONSTRAINT behavior_recognitions_roster FOREIGN KEY (roster_id) REFERENCES rosters(id),
    CONSTRAINT behavior_recognitions_behavior FOREIGN KEY (behavior_id) REFERENCES behaviors(id)
);

CREATE TABLE reward_recognitions (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    report_id INT NOT NULL,
    reward_id INT NOT NULL,
    CONSTRAINT reward_recognitions_report FOREIGN KEY (report_id) REFERENCES reports(id),
    CONSTRAINT reward_recognitions_reward FOREIGN KEY (reward_id) REFERENCES rewards(id)
);

CREATE TABLE matches (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    monday DATE NOT NULL,
    team_a_id INT NOT NULL,
    team_b_id INT NOT NULL,
    CONSTRAINT match_team_a FOREIGN KEY (team_a_id) REFERENCES teams(id),
    CONSTRAINT match_team_b FOREIGN KEY (team_b_id) REFERENCES teams(id)
);

SET FOREIGN_KEY_CHECKS = 1;

/*Data*/

INSERT INTO roles(name) VALUES
                 ("Admin"),
                 ("Coach"),
                 ("Student"),
                 ("Super Admin"),
                 ("Teacher"),
                 ("Volunteer");

INSERT INTO schools (name) VALUES
                    ("Temple University");

INSERT INTO accounts(first_name, last_name,  role_id, school_id) VALUES
                    ("Super",    "Admin",    4,       1),
                    -- team koala
                    ("Matthew",  "Murphy",   3,       1),
                    ("Paul",     "Bowen",    3,       1),
                    ("Teion",    "Ensley",   3,       1),
                    ("Ashcon",   "Zand",     3,       1),
                    ("Douglas",  "Schutz",   2,       1),
                    -- team giraffe
                    ("Murphy",   "Matthew",  3,       1),
                    ("Bowen",    "Paul",     3,       1),
                    ("Ensley",   "Teion",    3,       1),
                    ("Zand",     "Ashcon",   3,       1),
                    ("Schutz",   "Douglas",  2,       1);

INSERT INTO seasons(start, stop, school_iD) VALUES
                   (NOW(), ADDDATE(NOW(), INTERVAL 30 DAY), 1);

INSERT INTO teams(name,      season_id) VALUES
                 ("Panda",   1),
                 ("Giraffe", 1);

INSERT INTO membership(team_id, account_id) VALUES
                      -- team koala
                      (1,       2),
                      (1,       3),
                      (1,       4),
                      (1,       5),
                      (1,       6),
                      -- team giraffe
                      (2,       7),
                      (2,       8),
                      (2,       9),
                      (2,       10),
                      (2,       11);

INSERT INTO categories(name)
        VALUES   ("Homework"),
                 ("Attendance"),
                 ("Quizzes/Tests"),
                 ("Activity"),
                 ("Participation"),
                 ("Leadership"),
                 ("Outside");

INSERT INTO behaviors(name, description, season_id, category_id) VALUES
                     ("Homework", "Based on completion, 4 points earned per day", 1, 1),
                     ("Attendance", "3 points per day, late = 1/2 points", 1, 2),
                     ("Quizzes/Tests", "90+ = 15, 80+ = 10, 76+ = 5", 1, 3),
                     ("Activity", "5 points per activity per week, need 4/5 days attendance for points", 1, 4),
                     ("Participation", "2 points a day possible", 1, 5),
                     
                     ("Finish Do Now First", "Student finishes daily “do now” first", 1, 6),
                     ("Team Chemistry", "Teacher sees strong teamwork in class", 1, 6),
                     ("Office Hours", "Student visits teacher office hours", 1, 6),
                     ("Teacher Assistance", "Student helps teacher with task", 1, 6),
                     
                     ("Visiting a Museum", "Student brings museum stub and a photo of themselves there", 1, 7),
                     ("Contacting Mentor", "Can be earned once per week by each student", 1, 7),
                     ("Additional Community Service", "Points earned per hour", 1, 7),
                     ("Attending School Events", "Per event", 1, 7),
                     ("Parental Involvement", "Earned once per week by parent signing in", 1, 7);

INSERT INTO frequencies(days,   points, behavior_id) VALUES
                       (1,      4,      1),
                       (7,      20,     1),
                       
                       (1,      3,      2),
                       (7,      15,     2),
                       
                       (7,      15,     3),
                       
                       (7,      10,     4),
                       
                       (1,      2,      5),
                       (7,      10,     5),
                       
                       (1,      4,      6),
                       
                       (1,      4,      7),
                       
                       (1,      2,      8),
                       
                       (1,      2,      9),
                       
                       (7,      15,     10),
                       
                       (7,      5,      11),
                       
                       (7,      10,     12),
                       
                       (1,      10,     13),
                       
                       (7,      10,     14);

/*
{
    name: 'Curious Cat',
    description: 'Joining an Activity activity after 1st report period',
    type: 'Badge',
    requirements: [{
        target: 'Solo',
        secret: true
    }]
},
{
    name: 'The Juggler',
    description: 'Be a part of three Activities',
    type: 'Badge',
    requirements: [{
        target: 'Solo',
        secret: true
    }]
},
{
    name: 'Activity',
    description: 'More than one person on same Activity, +10 for each person',
    type: 'Bonus',
    requirements: [{
        target: 'Team',
        behavior: 3,
        points: 10,
        days: 7
    }],
    bonus: 10
},
{
    name: 'Quad Squad',
    description: 'All team members participate in same Activity for a week',
    type: 'Badge',
    requirements: [{
        target: 'Team',
        behavior: 1
    }]
}
*/

INSERT INTO rewards(name, description, bonus, is_secret, season_id) VALUES
                   ("Homework", "All students on team have perfect homework on one day", 20, FALSE, 1),
                   ("Attendance", "All students on team have perfect attendance for week", 20, FALSE, 1),
                   ("Quizzes/Tests", "All students on team get 15 points on a quiz/test that week", 20, FALSE, 1),
                   ("Activity", "More than one person on same Activity, +10 for each person", 10, FALSE, 1),
                   ("Participation", "All students on team have perfect participation in all classes on one day", 20, FALSE, 1),
                   ("Bronze Pen", "Perfect homework all classes for a week", NULL, FALSE, 1),
                   ("Silver Pen", "Perfect homework all classes for two weeks", NULL, FALSE, 1),
                   ("Gold Pen", "Perfect homework all classes for four months", NULL, FALSE, 1),
                   ("Bronze Calendar", "Perfect attendance for a month", NULL, FALSE, 1),
                   ("Silver Calendar", "Perfect attendance for two months", NULL, FALSE, 1),
                   ("Gold Calendar", "Perfect attendance for four months", NULL, FALSE, 1),
                   ("Bronze Hand", "Perfect participation for all classes for a week", NULL, FALSE, 1),
                   ("Silver Hand", "Perfect participation for all classes for two weeks", NULL, FALSE, 1),
                   ("Gold Hand", "Perfect participation for all classes for a month", NULL, FALSE, 1),
                   ("Bronze Heart", "Extra 10 hours community service", NULL, FALSE, 1),
                   ("Silver Heart", "Extra 20 hours community service", NULL, FALSE, 1),
                   ("Gold Heart", "Extra 30 hours community service", NULL, FALSE, 1),
                   ("Burning Calendar", "All team members perfect attendance for a month", NULL, FALSE, 1),
                   ("Homework Hawk", "All team members perfect homework for a month", NULL, FALSE, 1),
                   ("Knowledge Buff", "All team members visit a museum", NULL, FALSE, 1),
                   ("Roadrunner", "All team members finish a Do Now first within a week", NULL, FALSE, 1),
                   ("Fearless Help", "All team members visit office hours of a teacher", NULL, TRUE, 1),
                   ("Raised Hand", "All team members participate in all classes for one day", NULL, TRUE, 1),
                   ("All For One", "All team members get team chemistry points within a month", NULL, TRUE, 1),
                   ("Community Stars", "All team members do 10 extra hours of service", NULL, TRUE, 1);

INSERT INTO requirements(points, days, is_all_classes, is_team, use_max, behavior_id, reward_id) VALUES
                        (4,      1,    TRUE,           TRUE,    FALSE,   1,           1),
                        (15,     7,    TRUE,           TRUE,    FALSE,   2,           2),
                        (15,     7,    FALSE,          TRUE,    TRUE,    3,           3),
                        (10,     7,    FALSE,          TRUE,    FALSE,   4,           4),
                        (2,      1,    TRUE,           TRUE,    FALSE,   5,           5),
                        (20,     7,    TRUE,           FALSE,   FALSE,   1,           6),
                        (40,     14,   TRUE,           FALSE,   FALSE,   1,           7),
                        (320,    112,  TRUE,           FALSE,   FALSE,   1,           8),
                        (60,     28,   TRUE,           FALSE,   FALSE,   2,           9),
                        (120,    52,   TRUE,           FALSE,   FALSE,   2,           10),
                        (240,    104,  TRUE,           FALSE,   FALSE,   2,           11),
                        (10,     7,    TRUE,           FALSE,   FALSE,   5,           12),
                        (20,     14,   TRUE,           FALSE,   FALSE,   5,           13),
                        (40,     28,   TRUE,           FALSE,   FALSE,   5,           14),
                        (10,     360,  FALSE,          FALSE,   FALSE,   12,          15),
                        (20,     360,  FALSE,          FALSE,   FALSE,   12,          16),
                        (30,     360,  FALSE,          FALSE,   FALSE,   12,          17),
                        (60,     28,   TRUE,           TRUE,    FALSE,   2,           18),
                        (80,     28,   TRUE,           TRUE,    FALSE,   1,           19),
                        (15,     360,  FALSE,          TRUE,    TRUE,    10,          20),
                        (4,      7,    FALSE,          TRUE,    TRUE,    6,           21),
                        (2,      360,  FALSE,          TRUE,    TRUE,    8,           22),
                        (2,      1,    TRUE,           TRUE,    TRUE,    5,           23),
                        (4,      28,   FALSE,          TRUE,    TRUE,    7,           24),
                        (10,     360,  FALSE,          TRUE,    FALSE,   12,          25);
