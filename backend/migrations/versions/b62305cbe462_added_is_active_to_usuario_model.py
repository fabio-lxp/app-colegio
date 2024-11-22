"""Added is_active to Usuario model

Revision ID: b62305cbe462
Revises: ef2e9d7f6c74
Create Date: 2024-11-21 19:08:18.824891

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b62305cbe462'
down_revision = 'ef2e9d7f6c74'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('usuario', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.Boolean(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('usuario', schema=None) as batch_op:
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###
