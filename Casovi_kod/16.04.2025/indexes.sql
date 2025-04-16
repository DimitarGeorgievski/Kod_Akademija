CREATE TABLE users(
	user_id SERIAL PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	last_login TIMESTAMP,
	is_active boolean DEFAULT TRUE
);
CREATE TABLE posts(
	post_id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(user_id),
	title VARCHAR(200) NOT NULL,
	content TEXT,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	status VARCHAR(20) DEFAULT 'draft',
	view_count INTEGER DEFAULT 0
);

-- BASIC INDEX
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);

-- COMPOUND INDEX
CREATE INDEX idx_active_users ON users(username, email) WHERE is_active = true;

CREATE INDEX idx_users_active_created ON users(is_active, created_at);

-- ADDING INDEX ON FOREIGN KEY
CREATE INDEX idx_posts_user_id ON posts(user_id);

-- INDEX FOR SORTING
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);

SELECT * FROM users WHERE email = 'example@email.com';