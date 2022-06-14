create table portfolio_career (
    id varchar(36) unique not null primary key,
    organization varchar(255),
    role varchar(255),
    location varchar(255),
    start_date varchar(255),
    end_date varchar(255),
    incoming boolean,
    active boolean,
    about varchar(1000)
);
insert into portfolio_career (
        id,
        organization,
        role,
        location,
        start_date,
        end_date,
        incoming,
        active,
        about
    )
values (
        '3a2aa3b1-bf7a-430a-a433-691185c88ba3',
        'UCLA Summer Session',
        '留学生',
        'Los Angeles, United States',
        '2022/08',
        '2022/09',
        true,
        false,
        ''
    );
ALTER TABLE portfolio_career
ADD (
        tag varchar(255),
        created_date DATETIME,
        update_date DATETIME
    );
update portfolio_career
SET tag = 'education'
WHERE id = '3a2aa3b1-bf7a-430a-a433-691185c88ba3';