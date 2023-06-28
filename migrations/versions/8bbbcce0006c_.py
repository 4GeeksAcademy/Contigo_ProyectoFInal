"""empty message

Revision ID: 8bbbcce0006c
Revises: ca2fcf5f3dbc
Create Date: 2023-06-28 17:26:54.609177

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8bbbcce0006c'
down_revision = 'ca2fcf5f3dbc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('ong', schema=None) as batch_op:
        batch_op.add_column(sa.Column('direccion', sa.String(length=80), nullable=False))
        batch_op.drop_column('dirección')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('ong', schema=None) as batch_op:
        batch_op.add_column(sa.Column('dirección', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
        batch_op.drop_column('direccion')

    # ### end Alembic commands ###
